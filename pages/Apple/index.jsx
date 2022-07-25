import ReactPaginate from "react-paginate";
import styles from "../../styles/News.module.css";
import { useState } from "react";

export const Index = ({ articles }) => {
  const [article, setarticle] = useState(articles&&articles.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const articlePerPage = 10;
  const pagesVisited = pageNumber * articlePerPage;

  const displayarticle = article.slice(pagesVisited, pagesVisited + articlePerPage)
    .map((news, index) => {
      return (
        <div
          key={index}
          onClick={() => (window.open(`${news.url}`))}
          style={{
            backgroundImage: `url(${news.urlToImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={styles.news}
        >
          <div className={styles.details}>
            <h3 className={styles.title}>{news.title}</h3>
            <p className={styles.description}>{news.description}</p>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(article.length / articlePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className={styles.container}>
        
        {displayarticle}
        </div>
      <div className={styles.pagination}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=apple&from=2022-07-23&to=2022-07-23&sortBy=popularity&apiKey=${process.env.URL_KEY}`
  );
  const res = await apiResponse.json();
  const { articles } = res;
  return {
    props: { articles },
  };
};

export default Index;
