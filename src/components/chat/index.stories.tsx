import { RocketIcon } from '@altair-tv/alticons-chakra'
import React from 'react'

import {
  ChatGroup,
  ChatMessage,
  ChatTimestamp,
  ChatAuthor,
  ChatUserPronouns
} from '.'

import { ModeratorBadge, SupporterBadge } from './badge'

export default {
  title: 'Chat'
}

export const Overview = args => (
  <ChatGroup {...args}>
    <ChatMessage>
      <ChatTimestamp>1 minute ago</ChatTimestamp>
      <ChatAuthor color="turquoise.300">
        <ModeratorBadge />
        <SupporterBadge />
        <ChatUserPronouns pronouns={['She', 'Her']} />
        <span>Hypnotik:</span>
      </ChatAuthor>
      Thanks to everybody who joined us today! I really appreciate you all being
      part of our community and sharing this journey with us. Fiona will be live
      at the same time tomorrow and we’ll be picking up where we left off!
    </ChatMessage>
    <ChatMessage>
      I really enjoyed today’s stream! Can’t wait for tomorrow!
    </ChatMessage>
    <ChatMessage>
      <ChatTimestamp>Just now</ChatTimestamp>
      <ChatAuthor color="blue.300">
        <SupporterBadge />
        <ChatUserPronouns pronouns={['He', 'Him']} />
        <span>Avalonstar:</span>
      </ChatAuthor>
      I’m really looking forward to the next stream after what happened today!
      See you all next time friends
    </ChatMessage>
    <ChatMessage>
      <ChatTimestamp>Just now</ChatTimestamp>
      <ChatAuthor color="red.300">
        <span>Ollie:</span>
      </ChatAuthor>
      I just caught the stream in time today! I finish work earlier tomorrow so
      I’ll have plenty of time to get ready for the next one!
    </ChatMessage>
  </ChatGroup>
)

Overview.args = {
  size: 'md'
}
