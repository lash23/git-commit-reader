import { Test, TestingModule } from '@nestjs/testing';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { HttpModule } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { createResponse } from "node-mocks-http";

describe('CommitsController', () => {
  let controller: CommitsController;
  let service: CommitsService;
  const mockExpressResponse = createResponse();

  const commitServiceMock = {
    getCommits: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitsController],
      imports: [HttpModule],
      providers: [
        { provide: CommitsService, useValue: commitServiceMock },
      ]
    }).compile();

    controller = module.get<CommitsController>(CommitsController);
    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getCommits', () => {

    it('shohuld invokes commitsService.getCommits() method', async () => {
      await controller.getCommits(mockExpressResponse);
      expect(service.getCommits).toHaveBeenCalled();
    })

    it('should return 200 status in success response', async () => {
      const res = await controller.getCommits(mockExpressResponse);
      expect(res.statusCode).toEqual(HttpStatus.OK);
    });
  })

  describe('when external API fails chatch and shows API error', () => {
    it('should return Bad Gateway status', async () => {
      commitServiceMock.getCommits = jest.fn()
        .mockRejectedValue(new HttpException({}, HttpStatus.BAD_GATEWAY));
      const res = await controller.getCommits(mockExpressResponse);
      expect(res.statusCode).toEqual(HttpStatus.BAD_GATEWAY);
    });

    it('should return Not Found status', async () => {
      commitServiceMock.getCommits = jest.fn()
        .mockRejectedValue(new HttpException({}, HttpStatus.NOT_FOUND));
      const res = await controller.getCommits(mockExpressResponse);
      expect(res.statusCode).toEqual(HttpStatus.NOT_FOUND);
    });

    it('should return Bad Request status', async () => {
      commitServiceMock.getCommits = jest.fn()
        .mockRejectedValue(new HttpException({}, HttpStatus.BAD_REQUEST));
      const res = await controller.getCommits(mockExpressResponse);
      expect(res.statusCode).toEqual(HttpStatus.BAD_REQUEST);
    });
  })
});
