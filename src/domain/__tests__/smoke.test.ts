// Autor: Marcelino Benavides L
// Ejemplo de estilo: una prueba debe verificar el EFECTO real en el estado,
// no solo que el código no lanzó un error. Puedes borrar este archivo cuando
// escribas tu propia prueba.

import { describe, it, expect } from "vitest";
import { CrmRepository } from "../repository";

describe("CrmRepository — ejemplo de estilo", () => {
  it("persiste un Lead y lo refleja en el estado", () => {
    const repo = new CrmRepository();
    repo.createLead({ nombre: "Ana Torres", telefono: "664-000-0000" });

    // Verifica el efecto, no solo la ausencia de error.
    expect(repo.getLeads()).toHaveLength(1);
  });
});
