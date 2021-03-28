{ pkgs ? import <nixpkgs> {}, compiler ? "ghc8104" }:
pkgs.haskell.packages.${compiler}.callPackage ./default.nix { }