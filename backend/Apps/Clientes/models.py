from django.db import models

IDENTIFICACION_OPCIONES = [
    ('CC', 'Cédula de ciudadanía'),
    ('NIT', 'NIT'),
    ('P', 'Pasaporte'),
    ('CE', 'Cédula de extranjería'),
    ('TI', 'Tarjeta de identidad'),
    ('RC', 'Registro civil'),
    ('NIUP', 'NIUP'),
]
REGIMEN_OPCIONES = [
    ('IVA', 'Responsable de IVA'),
    ('No IVA', 'Responsable de NO IVA')
]
CONTRIBUYENTE_OPCIONES = [
    ('Juridico', 'Pesona juridica'),
    ('Natural', 'Pesona natural')
]
TAX_OPCIONES = [
    ('01', 'IVA impuesto sobre las ventas'),
    ('04', 'INC impuesto nacional al consumo'),
    ('ZA', 'IVA - INC'),
    ('ZZ', 'No aplica')
]
TAX_ID_OPCIONES = [
    ('Gran contribuyente'),
    ('Autorretenedor'),
    ('Agente de retencion en el impuesto sobre las ventas'),
    ('Regimen simple de tributacion'),
    ('R-99-PN'),
    ('No aplica'),
    ('Otros')
]


class Client(models.Model):
    mark_name = models.CharField(max_length=30, blank=False)
    tributare_type_id = models.CharField(
        choices=IDENTIFICACION_OPCIONES, 
        default='CC',
        verbose_name='Tipo de Identificación Tributaria'
    )
    id_number = models.CharField(max_length=15, blank=False)
    corporate_name = models.CharField(max_length=30, blank=False) 
    company_name = models.CharField(max_length=30, blank=False)
    regime_type = models.CharField(
        choices=REGIMEN_OPCIONES, 
        default='IVA',
        verbose_name='Tipo de regimen'
    )
    taxpayer_type = models.CharField(
        choices=CONTRIBUYENTE_OPCIONES, 
        default='IVA',
        verbose_name='Tipo de contribuyente'
    )
    tax_liability = models.CharField(
        choices=TAX_OPCIONES, 
        default='IVA',
        verbose_name='Responsabilidad tributaria'
    )
    tax_id_type = models.CharField(
        choices=TAX_ID_OPCIONES, 
        default='IVA',
        verbose_name='Tipo de identificacion tributaria'
    )
    eEmail = models.EmailField(blank=True)
    tel = models.CharField(max_length=15, blank=True)
    country = models.CharField(max_length=30, blank=True)
    department = models.CharField(max_length=30, blank=True)
    city = models.CharField(max_length=30, blank=True)
    address = models.CharField(max_length=30, blank=True)


class Contact(models.Model):
    cliente = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='Contactos')
    name = models.CharField(max_length=30, blank=True)
    lastname = models.CharField(max_length=30, blank=True)
    tel = models.CharField(max_length=15, blank=True)
    eEmail = models.CharField(max_length=30, blank=True)
    birthday = models.DateField()