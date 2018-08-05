class GenericException(Exception):
    status_code = 400
    internal_status = 'GENERIC_EXCEPTION'

    def __init__(self, message, status_code=None, payload=None, internal_status='GENERIC_EXCEPTION'):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload
        self.internal_status = internal_status

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        rv['internal_status'] = self.internal_status
        return rv