{
  network.description = "degenesis-chargen";

  degenesis-chargen =
    { config, pkgs, ... }: let
      degenesis-chargen = import ../release.nix { inherit pkgs; };
    in
    { networking.hostName = "degenesis-chargen";

      networking.firewall.allowedTCPPorts = [ 22 80 ];
      environment.systemPackages = [ degenesis-chargen ];

      systemd.services.degenesis-chargen =
        { description = "Degenesis character generator";
          wantedBy = [ "multi-user.target" ];
          after = [ "network.target" ];
          serviceConfig =
            { ExecStart = "${degenesis-chargen}/bin/degenesis-chargen";
            };
        };
    };
}