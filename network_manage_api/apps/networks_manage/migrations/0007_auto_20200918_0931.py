# Generated by Django 2.0.6 on 2020-09-18 01:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('networks_manage', '0006_auto_20200917_2243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='networks',
            name='created_time',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 18, 9, 31, 22, 815419), verbose_name='创建时间'),
        ),
        migrations.AlterField(
            model_name='networks',
            name='query_time',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 18, 9, 31, 22, 815370), verbose_name='最新探测时间'),
        ),
    ]