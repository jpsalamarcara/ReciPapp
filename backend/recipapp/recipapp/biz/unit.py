from recipapp.core.models import Unit, db

from recipapp.core.schemas import multiple_unit_schema


def get_all():
    all_persons = Unit.query.all()
    result = multiple_unit_schema.dump(all_persons, update_fields=False)
    return result