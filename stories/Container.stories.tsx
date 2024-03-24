import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../app/components/ui/containers';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  title: 'ui/Containers',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const ShortText: Story = {
  args: {
    children: 'Short text',
  },
};

export const LongText: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in tortor porta, fermentum mi convallis,
        vulputate arcu. Cras sit amet vestibulum ex. Phasellus egestas scelerisque nisi, vel ultrices lacus imperdiet
        sit amet. Phasellus vitae est at ligula maximus sodales eu pharetra justo. Pellentesque dapibus varius
        tincidunt. Nam viverra, ex non vestibulum dictum, sapien enim lobortis magna, sed consequat lorem metus et nisi.
        Donec sit amet nisi dignissim, varius felis consequat, semper turpis. Proin posuere pretium molestie. Vestibulum
        non rutrum elit. Nulla sed semper augue. Maecenas porta accumsan consectetur. Nunc molestie aliquam volutpat.
        Praesent semper augue gravida augue pellentesque, consectetur eleifend odio volutpat. Nulla sapien elit,
        pellentesque vel magna vel, pellentesque tincidunt dui. Vestibulum lacinia mi augue. Quisque imperdiet nulla
        sem. Donec sodales dui ut venenatis egestas. Nullam vitae nibh vestibulum, tristique nisi vitae, elementum mi.
        Proin fermentum et elit convallis accumsan. Quisque sodales pulvinar massa ut venenatis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu egestas tortor. Aliquam id
        ante vitae massa pulvinar dapibus. Quisque purus dui, suscipit et erat quis, blandit ultrices neque. Vivamus ac
        commodo diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida a eros id lacinia. Fusce
        eget justo at elit vestibulum commodo. Pellentesque nisl lorem, euismod id egestas eu, aliquet vel libero. Cras
        at metus id nisl rutrum vestibulum. Fusce quis suscipit massa. Pellentesque et rutrum massa, eget bibendum
        libero. Nunc pellentesque est placerat nisl laoreet pretium. Praesent tempus eleifend consectetur. In commodo
        suscipit sem, vel imperdiet turpis accumsan non. Ut posuere diam augue, non accumsan turpis imperdiet non.
        Quisque eget sem ut nunc vestibulum iaculis. Nulla pretium nunc nisl, at efficitur risus molestie vitae. Duis
        felis erat, consequat at tellus suscipit, mollis posuere nulla. Nulla a tristique ipsum, quis finibus erat.
        Nullam eu augue velit. Sed sollicitudin feugiat dui. Nunc sed varius sapien. Phasellus feugiat dapibus rhoncus.
        Mauris lobortis justo ac elementum euismod. Integer quis risus a velit aliquet efficitur. Phasellus aliquet
        metus non orci rutrum, semper finibus odio sollicitudin. Sed hendrerit velit elit, nec ornare dolor imperdiet
        sed. Integer porttitor tempus sapien, et consequat eros consectetur vel. Etiam rhoncus erat sed felis accumsan
        vehicula. Quisque urna eros, accumsan vitae nisi vitae, viverra tincidunt tellus. Aliquam erat volutpat. Aenean
        vulputate enim felis, ac pellentesque diam elementum at. Vestibulum ut sapien cursus, suscipit mi consectetur,
        fermentum tortor. Nam nulla sem, viverra vel varius nec, mattis sit amet eros. Nunc semper ante id fringilla
        tempor. Mauris vehicula nisi risus, sit amet gravida dui mollis id. Mauris sit amet lacus eu erat cursus
        elementum quis posuere turpis. Donec lacus urna, scelerisque non erat at, eleifend laoreet dui. Nam dignissim
        nibh id sodales mollis. Morbi euismod orci in metus vestibulum scelerisque. Nullam orci purus, vulputate vitae
        viverra non, varius id felis. Duis porta nunc lacus, vitae pretium est accumsan sed. Praesent in imperdiet
        tortor, vel pellentesque erat. Nunc luctus lacus sed massa cursus iaculis. Quisque neque enim, fringilla vel
        congue id, aliquet vitae odio. Maecenas vestibulum at justo id ornare. Mauris tempor pretium urna, et vehicula
        quam tincidunt in. Donec aliquam magna ac libero congue, non ultrices urna condimentum. Donec nunc leo, bibendum
        ut consequat nec, gravida euismod nunc. Curabitur tellus lectus, pellentesque ac tellus non, consequat finibus
        libero. Donec ut libero at justo posuere scelerisque. Donec venenatis metus libero, at tincidunt leo consequat
        id. Nulla facilisi.
      </p>
    ),
  },
};
