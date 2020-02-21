import makeSelectLoginContainer, {makeSelectEmail, makeSelectLoggedUser, makeSelectLoginUser, selectLoginContainerDomain} from '../selectors';

describe("selectLoginContainerDomain", () => {
  it("Should select the global state", () => {
    const globalState = {};
    const mockedState = {
      loginContainer: globalState,
    };
    expect(selectLoginContainerDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoginContainer', () => {
  const loginContainerSelector = makeSelectLoginContainer();
  it('should select the loginContainer state', () => {
    const state = {}

    const mockedState = {
      loginContainer: {
        state
      }
    }

    expect(loginContainerSelector(mockedState)).toEqual({state})
  })
})

describe('makeSelectLoginUser', () => {
  const loginUserSelector = makeSelectLoginUser();
  it('should select the loginUser object', () => {
    const loginUser = {
      email: 'email',
      password: 'pass',
    }

    const mockedState = {
      loginContainer: {
        loginUser
      }
    }

    expect(loginUserSelector(mockedState)).toEqual(loginUser)
  })
})

describe('makeSelectEmail', () => {
  const emailSelector = makeSelectEmail();
  it('should select user\'s email', () => {
    const loginUser = {
      email: 'e',
      password: 'pas'
    }

    const mockedState = {
      loginContainer: {
        loginUser
      }
    }

    expect(emailSelector(mockedState)).toEqual(loginUser.email)
  })
})

describe('makeSelectLoggedUser', () => {
  const loggedUserSelector = makeSelectLoggedUser();
  it('should select logged user', () => {
    const loggedUser = {
      email: 'e',
      password: 'pas',
      token: '9382'
    }

    const mockedState = {
      loginContainer: {
        loggedUser
      }
    }

    expect(loggedUserSelector(mockedState)).toEqual(loggedUser)
  })
})