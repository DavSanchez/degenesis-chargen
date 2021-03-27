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

runChargenServer :: IO ()
runChargenServer = scotty 8080 $ do
  middleware logStdoutDev
  middleware $ staticPolicy (addBase "public")
  get "/" $ file "public/index.html"
  get "/about" $ file "public/about.html"
  get "/changes" $ file "public/changes.html"
