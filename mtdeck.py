from urllib.parse import urlparse
import urllib.request
import pyto_ui as ui
import pyto_core
import random
import string
import os
import sys


class MTDeck:
    self.requirements = {'mtdeck.user.js': 'https://raw.githubusercontent.com/Compeito/MTDeck/master/dist/mtdeck.user.js',
                         'mtdeck4ios.user.js': 'https://raw.githubusercontent.com/nakano57/mtdeck-for-ios/master/dist/mtdeck4ios.user.js'}

    def __init__(self):
        # randlst = [random.choice(string.ascii_letters + string.digits) for i in range(8)]
        # self._token = ''.join(randlst)
        self._token = 'S3dgz3ECu3'

    def update_all(self):
        for name, url in self.requirements.items():
            dl_js(name, url)

    def dl_js(self, name, url):
        urllib.request.urlretrieve(url, name)

    def userjs(self, sender):
        for name, url in self.requirements.items():
            if os.path.isfile(name) == False:
                dl_js(name, url)
            with open(name, 'r') as f:
                js = f.read()
                sender.evaluate_js(js)

        js = 'pytoken =\"' + self._token + '\"'
        sender.evaluate_js(js)

    def opener(self, sender):
        o = urlparse(sender.url)
        print(o)

    def close_button(self, sender):
        sender.superview.close()


deck = MTDeck()
deck.update_all()

v = ui.View()
v.navigation_bar_hidden = True

w = ui.WebView('https://tweetdeck.twitter.com')
w.background_color = ui.Color.rgb(31, 41, 55, 1)
w.did_finish_loading = deck.userjs
w.did_start_loading = deck.opener
w.size = (v.width, v.height)
w.flex = [ui.FLEXIBLE_HEIGHT]
w.content_mode = ui.CONTENT_MODE_SCALE_ASPECT_FILL

b = ui.Button(title="×")
b.size = (50, 50)
b.font.with_size(ui.FONT_BUTTON_SIZE*2)
b.center = (v.width/6*5, v.height/10)
b.content_mode = ui.CONTENT_MODE_TOP_RIGHT
b.action = deck.close_button

v.add_subview(w)
v.add_subview(b)
ui.show_view(v, ui.PRESENTATION_MODE_FULLSCREEN)
# pyto_core.startup_script()
