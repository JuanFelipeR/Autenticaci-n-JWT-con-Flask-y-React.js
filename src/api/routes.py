from flask import request, jsonify, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    first_name = data.get("first_name")
    last_name = data.get("last_name")

    if not all([email, password, first_name, last_name]):
        return jsonify({"msg": "Todos los campos son requeridos"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "El usuario ya existe"}), 409

    new_user = User(
        email=email,
        first_name=first_name,
        last_name=last_name
    )
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "Usuario registrado exitosamente"}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not all([email, password]):
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Credenciales inválidas"}), 401

    # ✅ Convertir a string para evitar error: "Subject must be a string"
    token = create_access_token(identity=str(user.id))
    return jsonify({"access_token": token}), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    return jsonify({
        "msg": f"Bienvenido {user.first_name} {user.last_name}, esta es tu vista privada."
    }), 200


