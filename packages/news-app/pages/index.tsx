import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Header, HeadlineArticles, Line, Main, ArticlesList, Wrapper } from '../shared/components';
import { brazilTheme, portugalTheme } from '../stitches.config';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';

const Home: NextPage = () => {
  const [headlines, setHeadlines] = useState<any[]>([]);
  const [latestNews, setLatestNews] = useState<any[]>([]);

  useEffect(() => {
    renderHeadlines();
    renderLatestNews();
  }, []);

  const renderHeadlines = async () => {
    const response = await NewsApi.getTopHeadlines({
      queryString: turnToQueryString({
        country: 'us',
        pageSize: 3,
      }),
    });

    setHeadlines(response.data.articles);
  };

  const renderLatestNews = async () => {
    const response = await NewsApi.getEveryNews({
      queryString: turnToQueryString({
        q: 'bitcoin',
        pageSize: 6,
      }),
    });

    setLatestNews(response.data.articles);
  };

  console.log(latestNews);

  return (
    <div className="">
      <Header />
      <Main>
        <HeadlineArticles articles={headlines} />
        <Wrapper>
          <Line />
        </Wrapper>
        <ArticlesList articles={latestNews} />
      </Main>
    </div>
  );
};

export default Home;
