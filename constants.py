from pathlib import Path
from appdirs import user_data_dir
import os
PORT_IP = '21337'
LOCAL_MATCH = '/positional-rectangles'
LOCAL_DECK = '/static-decklist'
IP_KEY = 'http://127.0.0.1:'
LEADERBOARD_KEY = '.api.riotgames.com/lor/ranked/v1/leaderboards/'
VERSION_NUM = 'v0.9.13'
DISPLAY_TITLE = 'LoR Master Tracker'
MAX_NUM_INSPECT = 10
MAX_NUM_TRACK = 10
MAX_NUM_ALL = 20

DefaultLanguage = 'en-US'

UNSUPPORTED_MODE = ['Expeditions', 'Mods_URF', 'Power2', 'Mods_Power_1']
UNSUPPORTED_TYPE = ['AI']
SUPPORTED_MODE = ['SeasonalTournamentLobby',
                  'LastCallQualifierGauntletLobby', 'Bo3ChallengeLobby', 'StandardGauntlet']

appDir = user_data_dir('LMT', DISPLAY_TITLE)


def getCacheFilePath(fileName, subDir='backend'):
    filePath = Path(appDir, subDir, fileName)
    os.makedirs(os.path.dirname(filePath), exist_ok=True)
    return filePath
