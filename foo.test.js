const timestampMatcher = { createdAt: expect.any(String) };

const fooMatcher = {
  foo: timestampMatcher,
  bar: timestampMatcher
};

const fooMatcherSpread = {
  foo: { ...timestampMatcher },
  bar: { ...timestampMatcher }
};

const value = {
  foo: { createdAt: "def" },
  bar: { createdAt: "def", baz: "ab1" }
};
test("Matches property matchers", () => {
  expect(value).toMatchSnapshot(fooMatcher);
});

test("Matches property matchers - spread", () => {
  expect(value).toMatchSnapshot(fooMatcherSpread);
});
