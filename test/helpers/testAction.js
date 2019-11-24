const testAction = ({ render, Component }) => ({ actionName, action, params }) => {
  it(`should inject the action '${actionName}'`, () => {
    action.mockImplementation(() => ({
      type: 'MOCK_ACTION'
    }));

    const injected = render()
      .find(Component)
      .prop(actionName);
    expect(injected).toBeDefined();

    injected(params);

    expect(action).toHaveBeenCalled();

    if (params) {
      expect(action).toHaveBeenCalledWith(params);
    }
  });
};

export default testAction;
