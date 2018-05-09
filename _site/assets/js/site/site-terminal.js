// Responsible for the functionality of the site's pseudo-terminal.

// Class name for any terminal object
var terminalClassName = 'navTerminalChild';

$(document).ready(function(){
  jQuery(function($, undefined) {
    $('.navTerminalChild').terminal(function(command) {
      if (command !== '') {

        console.log(command);
        var cmd = command.toUpperCase().split(" ");

        if (cmd[0] == 'ECHO') {
          var output = '';
          for (var i = 1; i < cmd.length; i++) {
            output += cmd[i];
            output += ' ';
          }
          this.echo(String(output));
        }
        else if (cmd[0] == 'LYDD') {
          if (cmd[1]) {
            if (cmd[1] == 'START') {
              if (cmd[2]) {
                if (cmd[2] == '') {

                }
              }
            }
          }
          else {
            this.echo('***************************************');
            this.echo('** Application [[b;#00ffff;]LOW YIELD DAEMON] v2.3 **');
            this.echo('** developed by [[b;#ff00ff;]metakun technologies] **');
            this.echo('***************************************');
            this.echo('used to host decentralized kaizen');
          }
        }
        else if (cmd[0] == 'READ') {
          if (cmd[1]) {
            if (cmd[1] == 'MANTRA' || cmd[1] == 'MANTRA.A' ) {
              randomizeEcho(['lie','cheat','steal','kill','win','win','...','Everybody doin it'], 300);
            }
          }
          else {
            this.echo('// Application 9m [[b;#00ffff;]SECUREADER] 4tb //');
            this.echo('for all your file-reading needs');
            this.echo('comes standard with [[b;#00ffff;]NUT] since 3.01');
          }
        }
        else if (cmd[0] == 'HELP') {
          randomizeEcho(['Locating [[b;#00ff36;]help] file...',
            'File path corrupted. Please consult an administrator.',
            '[[b;#ff00ff;]Help file not found]'], 500);
        }

      }
    }, {
      greetings: '*** Welcome to [[b;#00ffff;]NUT] 3.88 ***',
      name: 'terminal',
      prompt: '//> ',
      onFocus: function(terminal){ $('.navTerminalChild').addClass('activeTerminal'); },
      onBlur: function(terminal){ $('.navTerminalChild').removeClass('activeTerminal'); },
      outputLimit: 30
    });

    updateTerminal('LOADING organizational_matrix...');
    updateTerminal('[[b;#ff00ff;]WARNING]: TERMINAL UNSTABLE');
  });
  
});

function updateTerminal(update) {
  $('.navTerminalChild').terminal().echo(update);
}

function randomizeEcho(items, multi = 300) {

  $('.navTerminalChild').terminal().echo(items[0]);
  if (items[1]) {
    setTimeout(function() { randomizeEcho(items.slice(1), multi); }, Math.floor(Math.random() * multi));
  }

}