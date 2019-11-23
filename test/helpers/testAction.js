const testAction = ({ render, Component }) => (actionName, action) => {
  it(`should inject the action '${actionName}'`, () => {
    action.mockImplementation(() => ({
      type: 'MOCK_ACTION'
    }));

    const injected = render()
      .find(Component)
      .prop(actionName);
    expect(injected).toBeDefined();

    injected();

    expect(action).toHaveBeenCalled();
  });
};

export default testAction;
