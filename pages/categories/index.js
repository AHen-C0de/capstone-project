import styled from "styled-components";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Background from "../../components/Background";
import ContentWrapper from "../../components/ContentWrapper";
import AllItemsButton from "../../components/buttons/AllItemsButton";
import { getShoppingItemsByUser } from "../../services/shoppingItemService";
import { getAllCategories } from "../../services/categoryService";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (session) {
    const shoppingItems = await getShoppingItemsByUser(session.user.email);
    const categories = await getAllCategories();
    return {
      props: { shoppingItems: shoppingItems, categories: categories },
    };
  } else return { props: {} };
}

export default function Categories({ shoppingItems, categories }) {
  const { data: session } = useSession();
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    if (session) {
      setFilteredCategories(getCategories());
    }
  }, [session]);

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

      {session ? (
        <Header>Kategorien</Header>
      ) : (
        <Header isOverlappingAnimation={true}>MyShoppingManager</Header>
      )}
      {session ? (
        <>
          <main>
            <ContentWrapper>
              <Background opacity="0.7" />
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
                  <AllItemsButton />
                </StyledLink>
              </Link>
            </ContentWrapper>
          </main>
          <NavigationBar />
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
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
  background: var(--list-primary__gradient);
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
  &:hover {
    box-shadow: var(--buttonshaddow__hover);
  }
`;
