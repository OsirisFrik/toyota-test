// Autor: Marcelino Benavides L
// Tipos de dominio para el ejercicio. Identificadores en inglés, comentarios en español.

export interface Lead {
  id: string;
  nombre: string;
  telefono: string;
}

export interface Deal {
  id: string;
  leadId: string;
  titulo: string;
}
