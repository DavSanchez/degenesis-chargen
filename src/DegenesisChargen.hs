-- |
-- Copyright: (c) 2021 David Sánchez
-- SPDX-License-Identifier: MIT
-- Maintainer: David Sánchez <david.sanchez.lt@gmail.com>
--
-- A character generator for the Degenesis Roleplaying Game
module DegenesisChargen
  ( runChargenServer,
  )
where

import Network.Wai.Middleware.RequestLogger
import Network.Wai.Middleware.Static
import Web.Scotty
import Prelude hiding (get)

import Paths_degenesis_chargen

runChargenServer :: IO ()
runChargenServer = do
  ddir <- getDataDir
  idxH <- getDataFileName "index.html"
  abtH <- getDataFileName "about.html"
  chgH <- getDataFileName "changes.html"
  scotty 8080 $ do
    middleware logStdoutDev
    middleware $ staticPolicy (addBase ddir)
    get "/" $ file idxH
    get "/about" $ file abtH
    get "/changes" $ file chgH
