module.exports = {
  name: 'interactionCreate',
  once: false,
  execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.execute(interaction);
    } catch (error) {
      console.log(err);
      interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true
      });
    }
  }
}