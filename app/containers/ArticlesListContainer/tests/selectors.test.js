import {makeSelectArticles, selectArticlesListContainerDomain} from '../selectors';

describe("selectArticlesListContainerDomain", () => {
  it("Should select the global state", () => {
    const globalState = {}
    const mockedState = {
      articlesListContainer: globalState
    }
    expect(selectArticlesListContainerDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectArticles', () => {
  const articlesSelector = makeSelectArticles();
  it('should select list of articles ', () => {
    const articlesForTag = [
      {
        id:1,
        url: 'a',
        title: 'a',
      },
    ];
    const mockedState = {
      articlesListContainer: {
        articlesForTag,
      },
    };
    expect(makeSelectArticles(mockedState)).toEqual(articlesForTag)
  })
})
