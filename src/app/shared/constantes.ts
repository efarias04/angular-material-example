import { Injectable } from '@angular/core';

export class ConstAplicacion {

  public static URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
  public static USER = 'admin';
  public static PASSWORD = 'admin';
  public static SUCCESS_LOGIN = '¡Correcto!';
  public static ERROR_LOGIN = '¡usuario o contraseña errada!';
  public static VAR_USER_SESSION_STORAGE = 'user';
  public static EMPTY = '';
  public static TIME_SNACKBAR: number = 1500;
  public static EDIT_SUCCESS = '¡Cambio realizado con éxito!';
  public static EDIT_ERROR = '¡Edición cancelada!';
  public static NOT_EDIT = 'No se edito ningún campo.';
}
