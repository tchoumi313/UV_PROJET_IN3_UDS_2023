import 'package:fltter_app/common/configurations/api_configuration.dart';
import 'package:fltter_app/common/models/reglements_interieurs.dart';
import 'package:fltter_app/repositories/auth_repository.dart';

class HomeRepository {
  HomeRepository({
    required this.authRepository,
  }) {}

  final AuthRepository authRepository;

  final dio = ApiConfiguration.dioClient;

  Future<List<ReglementInterieur>> getAllReglementInterieur() async {
    try {
      final response = await dio.get(
        'reglement/findAll',
        options: ApiConfiguration.getAuthorizationOptions(
            authRepository.getUserToken),
      );
      final List<ReglementInterieur> riData = [];

      final data = response.data!['data'] as List;
      for (var ri in data) {
        riData.add(ReglementInterieur.fromJson(ri));
      }

      return riData;
    } catch (e) {
      rethrow;
    }
  }
}