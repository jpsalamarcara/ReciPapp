from setuptools import setup, find_packages

REQUIRED = [
     'flask', 'flask_sqlalchemy', 'flask_marshmallow', 'marshmallow-sqlalchemy', 'flask-cors', 'sqlalchemy', 'psycopg2'
]

with open('README.md') as f:
    readme = f.read()

with open('LICENSE') as f:
    license = f.read()

setup(
    name='recipapp',
    version='0.1',
    description='Quick prototype',
    long_description=readme,
    author='Juan Pablo Salamanca Ramirez',
    author_email='jpsalamarcara@unal.edu.co',
    url='https://github.com/jpsalamarcara/ReciPapp.git',
    license=license,
    packages=find_packages(exclude=('tests', 'docs', 'dev')),
    install_requires=REQUIRED
)
