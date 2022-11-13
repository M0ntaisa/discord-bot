const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder().setColor('Blue').setTitle('Embed Title');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('tenting embed text'),
  async execute(interaction) {
    await interaction.reply({
      embeds: [embed]
    });
  }
}