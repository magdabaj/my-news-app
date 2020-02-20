import { makeSelectTags, selectNavigationContainerDomain, makeSelectSelectedTag } from '../selectors';
import { type } from 'ramda'

describe("Make select tag selector", () => {
  it("Should select initial state", () => {
    const  firstState = {
      "isDrawerOpen": false,
      "routerLocation": "",
      "selectedTag": {},
      "tags": [],
  }
    const secondState = {
      state: firstState
    };
    expect(selectNavigationContainerDomain(secondState)).toEqual(firstState);
  });
});

describe("makeSelectTags", () => {
  const tagSelector = makeSelectTags();
  it('select all tags', () => {
    const tags = [
      {
        id: 1,
        name: 'saga'
      },
      {
        id: 2,
        name: 'javascript'
      }
    ]

    const mockedState = {
      navigationContainer: {
        tags,
      },
    };
    expect(tagSelector(mockedState)).toEqual(tags)
  })
});

describe("makeSelectSelectedTag", () => {
  const tagSelector = makeSelectSelectedTag();
  it('selects a tag', () => {
    const selectedTag = [
      {
        id: 1,
        name: 'saga'
      },
    ];

    const mockedState = {
      navigationContainer: {
        selectedTag,
      },
    };
    expect(tagSelector(mockedState)).toEqual(selectedTag)
  })
})

