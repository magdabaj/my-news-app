import { addArticleCanceled, addArticle, addArticleSuccess, addArticleError } from "../actions";
import { ADD_ARTICLE_SUCCESS, ADD_ARTICLE_CANCELED, ADD_ARTICLE, ADD_ARTICLE_ERROR } from "../constants";

describe("ArticleFormContainer actions", () => {
  describe("Default Action", () => {
    it("has a type of ADD_ARTICLE", () => {
      const article = {
        url: 'sth',
        title: 'sth'
      };
      const tagId = 1;
      const user = {
        email: 'email',
        password: 'password',
        userId: 1,

      }
      const expected = {
        type: ADD_ARTICLE,
        article,
        tagId,
        user
      };
      expect(addArticle(article, tagId, user)).toEqual(expected);
    });
  });
});
