module.exports = {
  name: 'guildMemberAdd',
  once: false,
  execute(member) {
    const channel = member.guild.channels.cache.get('702474928640753888');
    channel.send(`${member.user} has joined the server!`);
  }
}