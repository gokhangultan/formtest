/// <reference types="cypress" />

describe("login form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("greets with Login", () => {
    cy.get("h1").should("contain", "Login");
  });

  it("button is disabled", () => {
    cy.get("button").should("be.disabled");
  });

  it("form doldurulunca buton aktif oluyor", () => {
    cy.get('input[name="email"]').type("admin@test.com");
    cy.get('input[name="password"]').type("123456");
    cy.get('[data-cy="terms"]').check();
    cy.get("button").should("not.be.disabled");
  });

  it("eposta hatalıyken buton pasif kalıyor", () => {
    cy.get('input[name="email"]').type("admintest.com");
    cy.get('input[name="password"]').type("123456");
    cy.get('[data-cy="terms"]').check();
    cy.get("button").should("be.disabled");
  });

  it("şifre 4 karakterden kısayken buton pasif kalıyor", () => {
    cy.get('input[name="email"]').type("admi@ntest.com");
    cy.get('input[name="password"]').type("123");
    cy.get('[data-cy="terms"]').check();
    cy.get("button").should("be.disabled");
  });

  it("onay verilmemişken buton pasif kalıyor", () => {
    cy.get('input[name="email"]').type("admin@test.com");
    cy.get('input[name="password"]').type("123456");
    cy.get('[data-cy="terms"]').check().uncheck();
    cy.get("button").should("be.disabled");
  });
});