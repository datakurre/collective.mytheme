{ pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation rec {
  name = "yarn-shell";
  buildInputs = with pkgs; [
    nodejs
    yarn
  ];
}
