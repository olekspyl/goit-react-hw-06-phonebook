import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const filterChange = createAction("contacts/filterChange");

export const nameChange = createAction("contacts/nameChange");
export const numberChange = createAction("contacts/numberChange");
export const nameReset = createAction("contacts/nameReset");
export const numberReset = createAction("contacts/numberReset");