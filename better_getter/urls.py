from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^admin/', admin.site.urls),
    url(r'^get_item/', include('get_item.urls')),
    url(r'^login/$', auth_views.login, {'template_name': 'login.html'}, name="login"),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name="logout"),
]
