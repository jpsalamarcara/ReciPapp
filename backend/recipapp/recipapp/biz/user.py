from recipapp.core.models import User, db

from recipapp.core.schemas import multiple_user_schema


def get_all_collectors():
    all_persons = User.query.filter(User.category == 2).all()
    result = multiple_user_schema.dump(all_persons, update_fields=False)
    return result