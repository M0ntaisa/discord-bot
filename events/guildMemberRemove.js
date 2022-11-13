module.exports = {
  name: 'guildMemberRemove',
  once: false,
  execute(member) {
    const channel = member.guild.channels.cache.get('702474928640753888');
    channel.send(`${member.user} has left the server!`);
  }
}