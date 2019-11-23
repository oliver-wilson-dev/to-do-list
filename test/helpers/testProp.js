const testProp = ({
  stateParam, render, Component, state
}) => (
  propName,
  action,
  { parameterOrder = [stateParam], transform = x => x } = {}
) => {
  it(`should inject the prop '${propName}'`, () => {
    const mockValue = transform(Symbol('mock-value'));
    action.mockImplementation(() => mockValue);

    const propPath = propName.includes('.')
      ? propName.split('.')
      : [propName];

    const prop = render()
      .find(Component)
      .prop(propPath.shift());

    if (propPath.length === 0) {
      expect(prop).toBeDefined();
      expect(prop).toEqual(mockValue);
    } else {
      const leafProp = propPath.reduce((subProp, path) => {
        expect(subProp).toBeDefined();

        return subProp[path];
      }, prop);

      expect(leafProp).toBeDefined();
      expect(leafProp).toEqual(mockValue);
    }

    const parameters = parameterOrder.map(
      param => (param === stateParam ? state : param)
    );

    expect(action).toHaveBeenCalledWith(...parameters);
  });
};

export default testProp;
