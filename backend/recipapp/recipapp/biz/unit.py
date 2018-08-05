from recipapp.core.models import Unit

from recipapp.core.schemas import multiple_product_schema


def get_all():
    all_persons = Unit.query.all()
    result = multiple_product_schema.dump(all_persons, update_fields=False)
    return result