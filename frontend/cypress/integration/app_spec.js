describe("Django REST framework -test frontend", () => {
  const article = {
    id: 0,
    title: "test_title",
    author: "yiding",
    description: 'test frontend',
    tags: "test,frontend",
    created_at: '2019-6-13'
  };
  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="title"]')
      .type(artile.title)
      .should("have.value", article.title);
    cy
      .get('textarea[name="author"]')
      .type(lead.author)
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
      .type(article.created_at)
      .should("have.value", article.updated_at);
    cy.get("form").submit();
  });
  // more tests here
});