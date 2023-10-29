import { Container, Content } from "./styles";

import { useEffect, useState } from "react";

import { fetchCoins } from "../../services/api";

import { TabsNav } from "../TabsNav";
import { TabContent } from "../TabContent";
import { Pagination } from "../Pagination";

export function Trend() {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchCoins();
      setCryptoCoins(response);
    }

    fetchData();
  }, []);

  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = cryptoCoins.slice(firstPostIndex, lastPostIndex);

  return (
    <Container>
      <Content>
        <h3>Market Update</h3>

        <div id="scrollContainer">
          <TabsNav />
          <TabContent cryptoCoins={currentPosts} />
          <Pagination totalPosts={cryptoCoins.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </Content>
    </Container>
  );
};