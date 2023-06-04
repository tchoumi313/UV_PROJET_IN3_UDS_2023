import 'package:bloc/bloc.dart';
import 'package:fltter_app/common/utils/enums.dart';
import 'package:fltter_app/repositories/auth_repository.dart';
import 'package:flutter/material.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'login_state.dart';
part 'login_cubit.freezed.dart';

class LoginCubit extends Cubit<LoginState> {
  LoginCubit({
    required this.authRepository,
    // ignore: prefer_const_constructors
  }) : super(LoginState());

  AuthRepository authRepository;

  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();
  final GlobalKey<FormState> loginForm = GlobalKey<FormState>();

  void checkIfFieldsAreEmpty() {
    emit(state.copyWith(loginStatus: ApiStatus.isLoading));
    final isValid = loginForm.currentState!.validate();

    if (!isValid) {
      emit(state.copyWith(
          loginStatus: ApiStatus.failed,
          statusMessage:
              'Veuillez respecter les procedures qui s\'affichent...'));
    } else {
      // set fields in state here
      emit(state.copyWith(emial: email.text, password: password.text));
      proceedToLogin();
    }
  }

  void proceedToLogin() async {
    try {
      // await authRepository.login();
      emit(state.copyWith(
          loginStatus: ApiStatus.success,
          statusMessage: 'Connexion à votre compte réussie...'));
    } catch (e) {
      emit(state.copyWith(
          loginStatus: ApiStatus.failed,
          statusMessage:
              'Erreur lors de la connexion à votre compte, veuillez réessayer plus tard...'));
    }
  }
}
