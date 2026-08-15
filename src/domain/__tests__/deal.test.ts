// Autor: Osiris Lopez
// Regla de negocio: ningún Deal puede existir sin un Lead asociado.

import { describe, it, expect } from "vitest";
import { CrmRepository } from "../repository";

describe("CrmRepository — createDeal", () => {
  it("no crea un Deal si el Lead asociado no existe, y no deja un Deal huérfano en el estado", () => {
    const repo = new CrmRepository();

    expect(() =>
      repo.createDeal({
        leadId: "lead-inexistente",
        titulo: "Venta camioneta",
      }),
    ).toThrow();

    // Verifica el efecto real: el estado no debe contener un Deal huérfano.
    expect(repo.getDeals()).toHaveLength(0);
  });
});
