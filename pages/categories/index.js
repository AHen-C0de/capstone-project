import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ContentWrapper from "../../components/ContentWrapper";
import IconPlusTextButton from "../../components/buttons/IconPlusTextButton";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";
import { getAllShoppingItems } from "../../services/shoppingItemService";
import { getAllCategories } from "../../services/categoryService";

export async function getServerSideProps() {
  const shoppingItems = await getAllShoppingItems();
  const categories = await getAllCategories();
  return {
    props: { shoppingItems: shoppingItems, categories: categories },
  };
}

export default function Categories({ shoppingItems, categories }) {
  const [filteredCategories, setFilteredCategories] = useState(getCategories());

  function getCategories() {
    const usedCategoryIds = shoppingItems.map(
      (shoppingItem) => shoppingItem.category
    );
    const filteredCategories = categories.filter((category) =>
      usedCategoryIds.includes(category.id)
    );
    return filteredCategories;
  }

  return (
    <>
      <Head>
        <title>Kategorien</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Kategorien</Header>
      <main>
        <ContentWrapper>
          <CategoryContainer>
            {filteredCategories.map(({ id, name, icon_src }) => (
              <li key={id}>
                <Link href={`/categories/${name}`}>
                  <StyledButton>
                    <span>{name}</span>
                    <Image
                      src={icon_src}
                      width={30}
                      height={30}
                      alt={`${name} Icon`}
                    />
                  </StyledButton>
                </Link>
              </li>
            ))}
          </CategoryContainer>
          <Link href={"/"} passHref>
            <StyledLink>
              <IconPlusTextButton
                padding="0.3rem 0.7rem 0.3rem 0.5rem"
                gap="0.5rem"
                left="0.3rem"
                margin="1.2rem 0 0 0"
              >
                <ArrowBackIcon alt="Pfeil Icon" size={30} />
                <p>Alle Items</p>
              </IconPlusTextButton>
            </StyledLink>
          </Link>
        </ContentWrapper>
      </main>
      <NavigationBar />
    </>
  );
}

const StyledLink = styled.a`
  align-self: flex-start;
  text-decoration: none;
`;

const CategoryContainer = styled.ul`
  background-color: var(--list-secondary);
  width: 100%;
  align-self: center;
  height: 100%;
  padding: 1rem;
  border: solid 1px #b3b3b3;
  border-radius: 0.5rem;
  overflow-y: auto;
  list-style: none;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.6rem;
  background-color: var(--list-primary);
  margin: 1rem 0;
  border-radius: 0.5rem;
  border: none;
  box-shadow: var(--button-shaddow);
  font-family: "Inter";
  font-size: 1.2rem;
  font-weight: 700;

  &:first-child {
    margin-top: 0;
  }
`;
