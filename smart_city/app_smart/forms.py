from django import forms

class CSVUploadForm(forms.Form):
    file = forms.FileField(label="Selecione um arquivo CSV")