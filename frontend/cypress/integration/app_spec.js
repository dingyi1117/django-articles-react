describe("Django REST framework -test frontend", () => {
  const article = {
    id: 0,
    title: "test_title",
    author: "yiding",
    description: 'test frontend',
    tags: "test,frontend",
    created_at: '2019-6-13',
    updated_at: '2019-6-14'
  };

  before(() => {
    cy.exec("yarn run start");
    cy.exec("yarn run flush");
  });

  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="title"]')
      .type(artile.title)
      .should("have.value", article.title);
    cy
      .get('textarea[name="author"]')
      .type(artile.author)
      .should("have.value", article.author);
    cy
      .get('textarea[name="description"]')
      .type(article.description)
      .should("have.value", article.description);
    cy
      .get('textarea[name="tags"]')
      .type(article.tags)
      .should("have.value", article.tags);
    cy
      .get('input[name="created_at"]')
      .type(article.created_at)
      .should("have.value", article.created_at);
    cy
      .get('input[name="updated_at"]')
      .type(article.updated_at)
      .should("have.value", article.updated_at);
    cy.get("form").submit();
  });
  // more tests here
});