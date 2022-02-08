import { styled } from '../../../stitches.config';
import { Wrapper, Card, Title } from '..';

const StyledHighlitedArticles = styled('div', {});

const List = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'row',
  listStyle: 'none',

  '@desktop': {
    gridAutoFlow: 'dense',
    rowGap: '20px',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});
const ListItem = styled('li', {
  width: '100%',
  height: 105,

  '& figure': {
    flexBasis: 100,
    width: 100,
    height: 104,
  },

  '@desktop': {
    width: 559,
    height: 146,

    '& figure': {
      flexBasis: 272,
      flexShrink: 0,
      width: 272,
      height: 146,
    },
  },
});

export const ArticlesList = ({ articles }: { articles: any[] }) => {
  return (
    <Wrapper>
      <Title as="h2">Latest News</Title>
      <List>
        {articles.map((article, i) => (
          <ListItem key={`article-item-${i}`}>
            <Card
              src={article.urlToImage}
              url={article.url}
              alt="Here is the image alt description"
              title={article.title}
              category="Category"
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
