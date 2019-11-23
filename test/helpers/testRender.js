const testRender = ({ render, Component }) => () => {
  it('should render', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render its Component', () => {
    expect(
      render()
        .find(Component)
        .exists()
    ).toBe(true);
  });
};

export default testRender;
