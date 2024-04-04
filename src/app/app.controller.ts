import { Controller, Get, Param } from '@nestjs/common';
import { DateTime } from 'luxon';

@Controller()
export class AppController {
  @Get('/records/:user')
  getData(@Param('user') user: string) {
    return [
      {
        name: user,
        score: 456,
        winner: true,
        timestamp: DateTime.now().minus({ hour: 1 }).toJSDate(),
      },
      {
        name: user,
        score: 986,
        winner: false,
        timestamp: DateTime.now().minus({ day: 1, hour: 2 }).toJSDate(),
      },
      {
        name: user,
        score: 847,
        winner: false,
        timestamp: DateTime.now().minus({ day: 2 }).toJSDate(),
      },
      {
        name: user,
        score: 241,
        winner: true,
        timestamp: DateTime.now().minus({ hour: 5 }).toJSDate(),
      },
    ];
  }
}
