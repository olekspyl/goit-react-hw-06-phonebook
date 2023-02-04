import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const filterChange = createAction("contacts/filterChange");
