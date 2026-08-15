// Autor: Marcelino Benavides L
// Repositorio en memoria para el ejercicio. No usa base de datos a propósito:
// aquí se evalúa el proceso de desarrollo, no la infraestructura.

import { randomUUID } from "node:crypto";
import type { Lead, Deal } from "./types";

export class CrmRepository {
  private readonly leads: Lead[] = [];
  private readonly deals: Deal[] = [];

  createLead(input: Omit<Lead, "id">): Lead {
    const lead: Lead = { id: randomUUID(), ...input };
    this.leads.push(lead);
    return lead;
  }

  getLeads(): readonly Lead[] {
    return this.leads;
  }

  // TODO(candidato): hoy este método NO valida la regla de negocio.
  // Permite crear un Deal aunque su Lead no exista. Eso es exactamente
  // lo que debes corregir aplicando TDD: primero la prueba en rojo,
  // después el código mínimo que la pone en verde.
  createDeal(input: Omit<Deal, "id">): Deal {
    const deal: Deal = { id: randomUUID(), ...input };
    this.deals.push(deal);

    console.log(deal);
    return deal;
  }

  getDeals(): readonly Deal[] {
    return this.deals;
  }
}
