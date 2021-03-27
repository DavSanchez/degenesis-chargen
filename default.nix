{ mkDerivation, base, gauge, lib, relude, scotty, wai-extra
, wai-middleware-static
}:
mkDerivation {
  pname = "degenesis-chargen";
  version = "0.0.0.0";
  src = ./.;
  isLibrary = true;
  isExecutable = true;
  libraryHaskellDepends = [
    base relude scotty wai-extra wai-middleware-static
  ];
  executableHaskellDepends = [ base relude ];
  testHaskellDepends = [ base relude ];
  benchmarkHaskellDepends = [ base gauge relude ];
  homepage = "https://github.com/DavSanchez/degenesis-chargen";
  description = "A character generator for the Degenesis Roleplaying Game";
  license = lib.licenses.mit;
}
